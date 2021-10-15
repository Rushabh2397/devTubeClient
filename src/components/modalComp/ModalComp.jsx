import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    border:"none",
    p:4,
    borderRadius:"5px"
};

const ModalComp = ({ component, handleOpen, handleClose, open }) => {

    console.log("component", component)
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {component()}
                </Box>

            </Modal>
        </div>
    );
}

export default ModalComp
