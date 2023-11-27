import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineFolderView } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import InnerFooter from '@/components/InnerFooter/InnerFooter';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import supabase from '@/utils/supabase';
import { GetServerSideProps } from 'next';
import Modal from 'react-modal';
import React, { useState } from 'react';

export const index = ({
  scholars,
  submissionIds,
  submissionValues,
  allSubmissions,
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');

  const openModal = async (id: number) => {
    // const d = await sysnopsis?.filter((el) => el.scholars_id == ndata.id);

    // const id = d[0].synopsis_id ? d[0].synopsis_id : d[0].progress_id;

    const { data, error } = await supabase
      .from('progress_report')
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

  const handleSubmissionRemark = async (Id: any, status: any, inputValue) => {
    let remark = document.getElementById(inputValue)?.value;

    if (remark) {
      // return;
      supabase
        .from('progress_report')
        .update({ ['drc_remark']: remark, ['drc_approval']: status })
        .eq('id', Id)
        .then((response) => {
          if (response.error) {
            console.error(response.error.message);
          } else {
            console.log('Update successful:', response.data);
          }
        });
      window.location.reload();
    } else {
      alert('Please Enter The Remark');
    }
  };

  const submissionDetails = (id: any) => {
    // const d = submissionIds?.filter((el: any) => el.scholars_id == scholarId);

    const data = allSubmissions.filter((el: any) => id == el.id);
    return data[0].drc_remark == 'Pending';
  };

  const getScholarReports = (scholarId: number) => {
    const d = submissionIds?.filter((el: any) => el.scholars_id == scholarId);

    return d;
  };

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
  return (
    <>
      <Head>
        <title>Report Remarks</title>
      </Head>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'100px'}
      >
        <Link href='/protected/drc'>
          <BackIcon />
        </Link>
        <Heading as={'h2'} color={'teal'} fontWeight={300}>
          Report Remarks
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'} marginBottom={'25%'}>
        {scholars?.map((scholar: any, index: number) => (
          <>
            {submissionValues.includes(scholar.id) ? (
              <>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  margin={'20px 0'}
                >
                  <Text fontSize={'2xl'} color={'#07443E'}>
                    {`${index + 1}- ${scholar.username} ${scholar.reg_no} `}
                  </Text>

                  {/* <Stack direction={['row']} spacing={'3%'}> */}
                </Box>

                {getScholarReports(scholar.id)?.map(
                  (synopsis: any, index: number) => (
                    <>
                      <Box
                        display={'flex'}
                        justifyContent={'space-around'}
                        // alignItems={'center'}
                        margin={'20px 0'}
                      >
                        <Button
                          padding={'10px 30px'}
                          leftIcon={<AiOutlineFolderView />}
                          colorScheme='green'
                          onClick={() => openModal(synopsis.progress_id)}
                        >
                          {' '}
                          View
                        </Button>
                        {submissionDetails(synopsis.progress_id) ? (
                          <>
                            <Box
                              display={'flex'}
                              justifyContent={'space-between'}
                              // alignItems={'center'}
                              // margin={'20px 0'}
                            >
                              <Input
                                type='text'
                                placeholder='Remarks'
                                padding={'10px 30px'}
                                size='2xl'
                                // margin={'20px 20px'}
                                required
                                id={`submissionRemark${index}`}
                              />
                              <Button
                                padding={'10px 30px'}
                                margin={'0 10px'}
                                colorScheme='blue'
                                onClick={() =>
                                  handleSubmissionRemark(
                                    synopsis.progress_id,
                                    'approve',
                                    `submissionRemark${index}`
                                  )
                                }
                              >
                                Approve
                              </Button>
                              <Button
                                padding={'10px 30px'}
                                margin={'0 10px'}
                                colorScheme='red'
                                onClick={() =>
                                  handleSubmissionRemark(
                                    synopsis.progress_id,
                                    'reject',
                                    `submissionRemark${index}`
                                  )
                                }
                              >
                                Reject
                              </Button>
                            </Box>
                          </>
                        ) : (
                          <>
                            <h1 style={heading}>Remarks Done</h1>
                          </>
                        )}
                        {/* </Stack> */}
                      </Box>
                    </>
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
            key != 'drc_approval' &&
            key != 'drc_remark' &&
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
export default index;

export const getServerSideProps: GetServerSideProps = async (params) => {
  const { data: scholarsResponse } = await supabase
    .from('scholars_profiles')
    .select('*');

  const { data: submissionData } = await supabase
    .from('submitted_progress')
    .select('*');

  const { data: submissionDetails } = await supabase
    .from('progress_report')
    .select('*');

  const submissionIds = submissionData;

  const allSubmissions = submissionDetails;

  const submissionValues: any[] = [];

  for (const i in submissionIds) {
    submissionValues.push(submissionIds[i].scholars_id);
  }

  const scholars = scholarsResponse;

  return {
    props: {
      scholars,

      submissionIds,

      submissionValues,

      allSubmissions,
    },
  };
};
