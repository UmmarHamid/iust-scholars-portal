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
import React, { useState } from 'react'
export const Index = ({ scholars, synopsisIds }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: "700px",
      maxHeight: "700px",
      minWidth:"500px",
      padding: "28px"
    },

  }
  const closeBtn = {
    backgroundColor: "#ff5050",
    color: "#fff",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "12px",
    marginTop: "12px",
  }
  const heading = {
    fontSize: "20px",
    fontWeight: "700",
    margin: "8px 0"
  }
  const text = {
    fontSize: "14px",
    lineHeight: "30px",
    letterSpacing: "1px",
    fontWeight: "400",
  }



  const handleRemark = async (scholarId) => {
    const remark = document.getElementById("remark")?.value;
    console.log(remark);

    const d = synopsisIds?.filter(
      (el) => (el.scholars_id == scholarId)
    );

    supabase.from("synopsis")
    .update({ ["supervisor_remarks"]: remark })
      .eq('id', d[0].synopsis_id)
      .then((response) => {
        if (response.error) {
          console.error(response.error.message);
        } else {
          console.log('Update successful:', response.data);
        }
      })


  }


  const openModal = async (ndata: any, sysnopsis: any[]) => {

    const d = await sysnopsis?.filter(
      (el) => (el.scholars_id == ndata.id)
    );
    const id = d[0].synopsis_id


    const { data, error } = await supabase
      .from('synopsis')
      .select("*")
      .eq('id', id)
      .single();



    console.log("synopsis", data)

    setIsModalOpen(true);
    setModalData(data);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(''); // Optionally reset data when closing the modal
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
                onClick={() => openModal(scholar, synopsisIds)}
              >
                View Synopsis
              </Button>
              <Input
                type='text'
                placeholder='Remarks'
                padding={'10px 30px'}
                size='2xl'
                margin={'20px 20px'}
                id="remark" />
              <Button padding={'10px 30px'} colorScheme='blue' marginRight={'20px'} onClick={() => handleRemark(scholar.id)}>
                Submit
              </Button>
            </Box><Box
              marginTop={'1%'}
              display={'flex'}
              justifyContent={'space-around'}
              alignItems={'center'}
            >
              <Button
                leftIcon={<AiOutlineFolderView />}
                padding={'10px 40px'}
                colorScheme='green'
              >
                View Submission
              </Button>
              <Input
                type='text'
                placeholder='Remarks'
                padding={'10px 30px'}
                size='2xl'
                margin={'20px 20px'} />
              <Button padding={'10px 30px'} colorScheme='blue' marginRight={'20px'}>
                Submit
              </Button>
            </Box>
          </>


        ))}
      </Container>

      <InnerFooter />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={customStyles}>
        <h1 style={{ fontSize: "30px", }} >Synopsis Details</h1>
   

        <Box>

      

{Object.entries(modalData).map(([key, value]) => (
  <Text key={key} fontSize={'2xl'} color={'#07443E'}>
    <h3 style={heading}>{key}:</h3>
    <p style={text}>{value}</p>
  </Text>
))}
         

 
        </Box>


        <button onClick={() => closeModal(false)} style={closeBtn}>Close Synopsis</button>
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

  const synopsisIds = synopsisData;
  // console.log(synopsisIds)

  const values: any[] = [];
  for (const i in synopsisIds) {

    values.push(synopsisIds[i].scholars_id);

  };


  const userDetails = await fetchUserDetails(
    params?.query?.email?.toString() || ''
  );
  const scholars = scholarsResponse?.filter(
    (scholar) => (scholar.assigned_supervisor == userDetails.id && values.includes(scholar.id))
  );


  return { props: { scholars, synopsisIds } };
};



