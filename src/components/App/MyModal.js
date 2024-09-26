import { Box, Modal, Paper, Typography } from "@mui/material";

function MyModal({isOpen, closeModal, children}){
    return(
        <Modal open={isOpen} onClose={closeModal}>
            <Paper
                elevation={2}
                sx={{
                    position: "relative",
                    top: '50%',
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: '50px',
                    maxHeight: "90%",
                    maxWidth: "50%",
                    overflow: "visible",
                }}
            >
                {children}
            </Paper>
        </Modal>
    );
}
export default MyModal