// const VideoPlayer = () => {
// 	return (
// 		<div>
// 			<iframe
// 				className="w-full h-[90vh] absolute"
// 				src="https://www.youtube.com/embed/BoYpQrZcC3Q?autoplay=1&controls=0&showinfo=0&rel=0"
// 				title="Fondo de pantalla del universo con música relajante para meditar// Wallpaper of the universe"
// 				allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 				allowfullscreen
// 			></iframe>
// 		</div>
// 	);
// };
// export default VideoPlayer;
const VideoPlayer = () => {
	return (
		<div>
			<video
				className="w-full h-[91vh] object-cover absolute"
				autoPlay
				muted
				loop
			>
				<source src="../../public/videomuestra.mp4" type="video/mp4" />
				Tu navegador no admite la reproducción de videos.
			</video>
		</div>
	);
};

export default VideoPlayer;
