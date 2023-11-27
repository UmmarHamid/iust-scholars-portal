import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { AiOutlineFolderView } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import { GetServerSideProps } from 'next';
import supabase from '@/utils/supabase';
import { fetchUserDetails } from '@/utils/utils';
import Modal from 'react-modal';
import React, { useState } from 'react';
export const Index = ({
  scholars,
  synopsisIds,
  submissionIds,
  synopsisValues,
  submissionValues,
  allSynopsis,
  allSubmissions,
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '700px',
      maxHeight: '500px',
      minWidth: '500px',
      padding: '28px',
    },
  };
  const closeBtn = {
    backgroundColor: '#ff5050',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '12px',
    marginTop: '12px',
  };
  const heading = {
    fontSize: '20px',
    fontWeight: '700',
    margin: '8px 0',
    textTransform: 'capitalize',
  };
  const text = {
    fontSize: '14px',
    lineHeight: '30px',
    letterSpacing: '1px',
    fontWeight: '400',
  };

  const handleSynopsisRemark = async (scholarId) => {
    let remark = document.getElementById('sysnopsisRemark')?.value;

    if (remark) {
      const d = synopsisIds?.filter((el) => el.scholars_id == scholarId);

      supabase
        .from('synopsis')
        .update({ ['supervisor_remarks']: remark })
        .eq('id', d[0].synopsis_id)
        .then((response) => {
          if (response.error) {
            console.error(response.error.message);
          } else {
            console.log('Update successful:', response.data);
          }
        });
      window.location.reload();
    } else {
      alert('Please enter the Remark');
    }
  };

  const handleSubmissionRemark = async (id, inputValue) => {
    let remark = document.getElementById(inputValue)?.value;

    if (remark) {
      // const d = submissionIds?.filter((el) => el.scholars_id == scholarId);

      // return

      supabase
        .from('progress_report')
        .update({ ['supervisior_remark']: remark })
        .eq('id', id)
        .then((response) => {
          if (response.error) {
            console.error(response.error.message);
          } else {
            console.log('Update successful:', response.data);
          }
        });
      window.location.reload();
    } else {
      alert('Please Enter the Remark');
    }
  };

  const synopsisDetails = (scholarId) => {
    const d = synopsisIds?.filter((el) => el.scholars_id == scholarId);
    if (d.length >= 1) {
      const data = allSynopsis.filter((el) => d[0].synopsis_id == el.id);
      return data[0].supervisor_remarks == 'Pending';
    } else {
      return false;
    }
  };

  const submissionDetails = (id) => {
    // const d = submissionIds?.filter((el) => el.scholars_id == id);

    // if (d.length >= 1) {
    const data = allSubmissions.filter((el) => id == el.id);
    return data[0].supervisior_remark == 'Pending';
    // } else {
    //   return false;
    // }
  };

  const openModal = async (ndata: any, sysnopsis: any[], tableName: string) => {
    // return ;

    const d = await sysnopsis?.filter((el) => el.scholars_id == ndata.id);
    const id = d[0].synopsis_id ? d[0].synopsis_id : d[0].progress_id;

    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('id', id)
      .single();

    setIsModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(''); // Optionally reset data when closing the modal
  };

  const getScholarReports = (scholarId: number) => {
    const d = submissionIds?.filter((el: any) => el.scholars_id == scholarId);

    return d;
  };

  return (
    <>
      <Head>
        <title>Progress Module</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/supervisor'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Progress Module
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'}>
        {scholars?.map((scholar: any, index: number) => (
          <>
            <Text fontSize={'2xl'} color={'#07443E'}>
              {`${index + 1}- ${scholar.username} ${scholar.reg_no} `}
            </Text>
            {synopsisValues.includes(scholar.id) ? (
              <Box
                marginTop={'1%'}
                display={'flex'}
                justifyContent={'space-around'}
                alignItems={'center'}
              >
                <Button
                  leftIcon={<AiOutlineFolderView />}
                  padding={'10px 40px'}
                  colorScheme='green'
                  onClick={() => openModal(scholar, synopsisIds, 'synopsis')}
                >
                  View Synopsis
                </Button>

                {synopsisDetails(scholar.id) ? (
                  <>
                    <Input
                      type='text'
                      placeholder='Remarks'
                      padding={'10px 30px'}
                      size='2xl'
                      margin={'20px 20px'}
                      id='sysnopsisRemark'
                    />
                    <Button
                      padding={'10px 30px'}
                      colorScheme='blue'
                      marginRight={'20px'}
                      onClick={() => handleSynopsisRemark(scholar.id)}
                    >
                      Submit
                    </Button>
                  </>
                ) : (
                  <h2 style={heading}>Remarks Done</h2>
                )}
              </Box>
            ) : (
              <></>
            )}

            {submissionValues.includes(scholar.id) ? (
              <>
                {getScholarReports(scholar.id)?.map(
                  (synopsis: any, ind: number) => (
                    <Box
                      marginTop={'1%'}
                      display={'flex'}
                      justifyContent={'space-around'}
                      alignItems={'center'}
                    >
                      <Button
                        leftIcon={<AiOutlineFolderView />}
                        padding={'10px 40px'}
                        colorScheme='green'
                        onClick={() =>
                          openModal(scholar, submissionIds, 'progress_report')
                        }
                      >
                        View Submission
                      </Button>

                      {submissionDetails(synopsis.progress_id) ? (
                        <>
                          <Input
                            type='text'
                            placeholder='Remarks'
                            padding={'10px 30px'}
                            size='2xl'
                            margin={'20px 20px'}
                            id={`submissionRemark${index}${ind}`}
                          />
                          <Button
                            padding={'10px 30px'}
                            colorScheme='blue'
                            marginRight={'20px'}
                            onClick={() =>
                              handleSubmissionRemark(
                                synopsis.progress_id,
                                `submissionRemark${index}${ind}`
                              )
                            }
                          >
                            Submit
                          </Button>
                        </>
                      ) : (
                        <>
                          <h1 style={heading}>Remarks Done</h1>
                        </>
                      )}
                    </Box>
                  )
                )}
              </>
            ) : (
              <></>
            )}
          </>
        ))}
      </Container>

      <InnerFooter />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
      >
        <h1 style={{ fontSize: '30px' }}>Synopsis Details</h1>

        <Box>
          {Object.entries(modalData).map(([key, value]) =>
            key != 'supervisor_remarks' &&
            key != 'drc_remark' &&
            key != 'drc_approval' &&
            key != 'drc_remarks' &&
            key != 'id' &&
            key != 'supervisior_remark' ? (
              <Text key={key} fontSize={'2xl'} color={'#07443E'}>
                <h3 style={heading}>{key}:</h3>
                <p style={text}>{value}</p>
              </Text>
            ) : (
              <></>
            )
          )}
        </Box>

        <button onClick={() => closeModal()} style={closeBtn}>
          Close Synopsis
        </button>
      </Modal>
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (params) => {
  const { data: scholarsResponse } = await supabase
    .from('scholars_profiles')
    .select('*');

  const { data: synopsisData } = await supabase
    .from('submitted_synopsis')
    .select('*');

  const { data: submissionData } = await supabase
    .from('submitted_progress')
    .select('*');

  const { data: synopsisDetails } = await supabase.from('synopsis').select('*');
  const { data: submissionDetails } = await supabase
    .from('progress_report')
    .select('*');

  const synopsisIds = synopsisData;
  const submissionIds = submissionData;

  const allSynopsis = synopsisDetails;
  const allSubmissions = submissionDetails;

  const synopsisValues: any[] = [];
  const submissionValues: any[] = [];

  for (const i in synopsisIds) {
    synopsisValues.push(synopsisIds[i].scholars_id);
  }

  for (const i in submissionIds) {
    submissionValues.push(submissionIds[i].scholars_id);
  }

  const userDetails = await fetchUserDetails(
    params?.query?.email?.toString() || ''
  );

  const scholars = scholarsResponse?.filter(
    (scholar) =>
      (scholar.assigned_supervisor == userDetails.id &&
        synopsisValues.includes(scholar.id)) ||
      submissionValues.includes(scholar.id)
  );

  return {
    props: {
      scholars,
      synopsisIds,
      submissionIds,
      synopsisValues,
      submissionValues,
      allSynopsis,
      allSubmissions,
    },
  };
};
