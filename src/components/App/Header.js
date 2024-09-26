import { Box, Typography } from '@mui/material';
import './header.css';
import MyModal from './MyModal';
import Menu from "@mui/icons-material/Menu";
import { useState } from 'react';

function Header(){
    const [isModalOpen, setIsModalOpen]= useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <>
           <div className = "headerContainer">
            <div>
                <div className='headerArea2'>
                    <div>
                        <Menu onClick={openModal}/>
                        <MyModal
                            sx = {{
                                width: "150%",
                            }}
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                        >
                            <Box>
                                <Typography variant="h6" component="h2">
                                    hi
                                </Typography>
                                <Typography sx = {{mt:2}}>
                                    it's me
                                </Typography>
                            </Box>
                        </MyModal>
                    </div>
                </div>
            </div>
            <div>
                <div className = "headerArea1">
                    <div className = "headerArea1Menu1"><a href='#uno'>1장</a></div>
                    <div className = "headerArea1Menu2"><a href='#dos'>2장</a></div>
                    <div className = "headerArea1Menu3"><a href='#tres'>3장</a></div>
                    <div className = "headerArea1Menu4"><a href='#quatro'>4장</a></div>
                </div>
            </div>
           </div>
        </>
    );
};
export default Header