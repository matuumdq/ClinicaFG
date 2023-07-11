const Footer = () => {
	return (
		<div className="flex w-full items-center justify-center bg-black p-5">
			<p className="text-white">
				{new Date().getFullYear()} &#169;{" "}
				<span className="font-bold">CICEC</span> , all rights reserved
			</p>
		</div>
	);
};

export default Footer;
