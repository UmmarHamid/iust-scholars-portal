import { Button } from '@chakra-ui/button';
import Link from 'next/link';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from '@chakra-ui/react';
import Logout from '@/components/Logout/Logout';
import BackIcon from '@/components/BackIcon/BackIcon';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import { useUser } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import supabase from '@/utils/supabase';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
export const Index = ({ scholar, progressReport }: any) => {
  const loggedinUser = useUser();

  console.log("All Progress",progressReport)

  const table = {
    minWidth: 650,
    borderCollapse: 'separate',
    borderSpacing: '0px 4px',
    
  };

  let [formData, setFormData] = useState({
    titleOfResearch: '',
    period: '',
    detailedProgressReport: '',
    summaryOfProgressReport: '',
  });

  const [ProgressData, setProgressData] = useState(
    Object.keys(progressReport).length === 0
  );

  const [Report, setReport] = useState(true);
  const [Id, setid] = useState(0);



  // console.log('progressStatus',ProgressData)



  const handleAddProgress = async () => {

    if(Report){
      
            // progressReport = {...progressReport ,...formData};
            // console.log('old',progressReport)
      // setProgressData(false);

      //       return;

      const { data, error } = await supabase
      .from('progress_report')
      .insert([formData])
      .select();


    const progress = data ? data[0] : [];
    // progressReport = {...progressReport ,...progress};
    console.log('new',progressReport)


    const scholarid = scholar.id;
    console.log(progress.id);
    if (progress) {
      const { data, error } = await supabase
        .from('submitted_progress')
        .insert({ progress_id: progress.id, scholars_id: scholarid })
        .select();

      console.log(data, error);
    console.log('new',progressReport)


        window.location.reload();
      
      // router.push('/protected/office');
    }
    if (error) {
      console.log('error creating new scholar');
    }
    }else{

      supabase
        .from('progress_report')
        .update({
          titleOfResearch: formData.titleOfResearch,
          period: formData.period,
          detailedProgressReport: formData.detailedProgressReport,
          summaryOfProgressReport: formData.summaryOfProgressReport,
          supervisior_remark: 'Pending',
          drc_approval: 'pending',
          drc_remark: 'Pending',
        })
        .eq('id', Id)
        .then((response) => {
          if (response.error) {
            console.error(response.error.message);
          } else {
            console.log('Update successful:', response.data);
            setProgressData(false);
          }
        });


// -----------------End------------



    }
    
  };

  function addNewReport(){
    console.log('add new')

   
    formData.titleOfResearch = '';
    formData.period = '';
    formData.detailedProgressReport = '';
    formData.summaryOfProgressReport = '';

    setid(0)
    setReport(true)
    setProgressData(true);
  }

  function editReport(id: number) {
    const data = progressReport?.filter((el) => el.id == id);

    formData.titleOfResearch = data[0].titleOfResearch;
    formData.period = data[0].period;
    formData.detailedProgressReport = data[0].detailedProgressReport;
    formData.summaryOfProgressReport = data[0].summaryOfProgressReport;
    data[0].supervisior_remark = "Pending";
    data[0].drc_approval = "Pending";
    data[0].drc_remark = "Pending";
    setid(data[0].id)
    setReport(false)
    setProgressData(true);

  }
  return (
    <>
      <Head>
        <title>Progress Report</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href={`/protected/scholars/${loggedinUser?.email}`}>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Progress Report
        </Heading>
        <Logout />
      </Box>

      {ProgressData ? (
        <Container maxWidth={'6xl'}>
          <FormControl>
            <FormLabel>{`Title Of Research`}</FormLabel>
            <Textarea
              value={formData.titleOfResearch}
              onChange={(e) =>
                setFormData({ ...formData, titleOfResearch: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{`Six Month progress report for the period of:`}</FormLabel>
            <Textarea
              value={formData.period}
              onChange={(e) =>
                setFormData({ ...formData, period: e.target.value })
              }
              mb={4}
            />
            <FormLabel>{` Detailed Progress Report`}</FormLabel>
            <Textarea
              value={formData.detailedProgressReport}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  detailedProgressReport: e.target.value,
                })
              }
              mb={4}
            />
            <FormLabel>{`Summary Of Progress Report`}</FormLabel>
            <Textarea
              value={formData.summaryOfProgressReport}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  summaryOfProgressReport: e.target.value,
                })
              }
            />
          </FormControl>
          <Button
            onClick={handleAddProgress}
            fontSize={26}
            colorScheme='teal'
            size='lg'
            width={'30%'}
            marginBottom={'10%'}
          >
            Submit
          </Button>
        </Container>
      ) : (
        <>
          <Container maxWidth={'6xl'}>
            <table style={table}>
              <tr>
                <th>Supervisor Remark</th>
                <th>DRC Remark</th>
                <th>Report Status</th>
                <th></th>
              </tr>
              {progressReport?.map((report: any, index: number) => (
                
                  <tr style={{textAlign:'center'}}>
                    <td>{report.supervisior_remark}</td>
                    <td>{report.drc_remark}</td>
                    <td>{report.drc_approval}</td>
                    <td>
                      {report.drc_approval == 'reject' ? (
                        <button onClick={() => editReport(report.id)}>
                          Edit
                        </button>
                      ) : (
                        <>
                          
                          
                        </>
                      )}
                    </td>
                  </tr>
                
              ))}

            </table>
            <Box
             display={'flex'}
             justifyContent={'space-around'}
             alignItems={'center'}
             height={'100px'}
             >
            <button style={{background:'teal', padding:'20px ' , borderRadius:'12px',color:'#fff'}}
            onClick={addNewReport}
            >Add New Report</button>

            </Box>
          </Container>
        </>
      )}

      <InnerFooter />
    </>
  );
};
export default Index;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let scholarId = params?.scholarId;
  let { data: scholarData } = await supabase
    .from('scholars_profiles')
    .select('id')
    .eq('id', scholarId)
    .single();
  console.log(scholarData);

  const { data: submissionData } = await supabase
    .from('submitted_progress')
    .select('*');

  const { data: submissionDetails } = await supabase
    .from('progress_report')
    .select('*');

    let progressData ={}

    if(submissionData?.length !== 0){
      const Sdata = submissionData?.filter((el) => el.scholars_id == scholarId);

      let submissionValues = [];
    
      for (const i in Sdata) {
        submissionValues.push(Sdata[i].progress_id);
      }
    
       progressData = submissionDetails?.filter((el) =>
        submissionValues?.includes(el.id)
      );

    }



  return { props: { scholar: scholarData, progressReport: progressData } };
};
