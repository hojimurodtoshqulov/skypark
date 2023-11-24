import { AnimatePresence, motion } from "framer-motion";
import s from "./modal.module.scss";
import { FaXmark } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ open, setOpen, children, width, padding }) => {
	return (
		<>
			<AnimatePresence>
				{open ? (
					<div className={s.wrapper}>
						<motion.div
							className={s.modal}
							initial={{ opacity: 0, scale: 0.7 }}
							animate={{
								opacity: 1,
								scale: [1.1, 1],
								transition: {
									ease: "easeOut",
									duration: 0.2,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.7,
								transition: {
									ease: "easeIn",
									duration: 0.2,
								},
							}}
							style={{ width: `${width}%`, padding: padding }}
						>
							{children}
							<span onClick={() => setOpen(false)}>
								<FaXmark />
							</span>
						</motion.div>
						{/* {children} */}
					</div>
				) : null}
			</AnimatePresence>
			{open ? (
				<div className={s.modalBG} onClick={() => setOpen(false)}></div>
			) : null}
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
};

export default Modal;
