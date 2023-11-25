import InnerFooter from '@/components/InnerFooter/InnerFooter';
import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { AiOutlineFolderView } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import BackIcon from '@/components/BackIcon/BackIcon';
import Logout from '@/components/Logout/Logout';
import supabase from '@/utils/supabase';
import { GetServerSideProps } from 'next';
import Modal from 'react-modal';
import React, { useState } from 'react';

export const Index = ({
  scholars,
  synopsisIds,
  synopsisValues,
  allSynopsis,
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');

  const openModal = async (ndata: any, sysnopsis: any[], tableName: string) => {
    // return ;

    console.log(sysnopsis);
    console.log('data', ndata);
    const d = await sysnopsis?.filter((el) => el.scholars_id == ndata.id);
    console.log('data', d);

    // return;
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

  const handleSynopsisRemark = async (scholarId: any, status: any) => {
    let remark = document.getElementById('sysnopsisRemark')?.value;

    if (remark) {
      const d = synopsisIds?.filter((el: any) => el.scholars_id == scholarId);

      supabase
        .from('synopsis')
        .update({ ['drc_remarks']: remark, ['drc_approval']: status })
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
      alert('Please Enter The Remark');
    }
  };

  const synopsisDetails = (scholarId: any) => {
    const d = synopsisIds?.filter((el: any) => el.scholars_id == scholarId);
    if (d.length >= 1) {
      const data = allSynopsis.filter((el: any) => d[0].synopsis_id == el.id);
      return data[0].drc_approval == 'Pending';
    } else {
      return false;
    }
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
        <title>Approve Synopsis</title>
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
          Approve Synopsis
        </Heading>
        <Logout />
      </Box>
      <Container maxWidth={'5xl'} marginBottom={'25%'}>
        {scholars?.map((scholar: any, index: number) => (
          <>
            {synopsisValues.includes(scholar.id) ? (
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
                  <Button
                    padding={'10px 30px'}
                    leftIcon={<AiOutlineFolderView />}
                    colorScheme='green'
                    onClick={() => openModal(scholar, synopsisIds, 'synopsis')}
                  >
                    {' '}
                    View
                  </Button>
                  {synopsisDetails(scholar.id) ? (
                    <>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        margin={'20px 0'}
                      >
                        <Input
                          type='text'
                          placeholder='Remarks'
                          padding={'10px 30px'}
                          size='2xl'
                          margin={'20px 20px'}
                          required
                          id='sysnopsisRemark'
                        />
                        <Button
                          padding={'10px 30px'}
                          margin={'0 10px'}
                          colorScheme='blue'
                          onClick={() =>
                            handleSynopsisRemark(scholar.id, 'approve')
                          }
                        >
                          Approve
                        </Button>
                        <Button
                          padding={'10px 30px'}
                          margin={'0 10px'}
                          colorScheme='red'
                          onClick={() =>
                            handleSynopsisRemark(scholar.id, 'reject')
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
            key != 'drc_remarks' &&
            key != 'id' &&
            key != 'supervisor_remarks' ? (
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

  const { data: synopsisDetails } = await supabase.from('synopsis').select('*');

  const synopsisIds = synopsisData;

  const allSynopsis = synopsisDetails;
  const scholars = scholarsResponse;

  const synopsisValues: any[] = [];

  for (const i in synopsisIds) {
    synopsisValues.push(synopsisIds[i].scholars_id);
  }

  return {
    props: {
      scholars,
      synopsisIds,
      synopsisValues,
      allSynopsis,
    },
  };
};
