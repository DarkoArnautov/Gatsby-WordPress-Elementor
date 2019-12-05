import React from "react"

const Image = (settings) => {
	console.log({ settings });
	return(<img src={settings.image.url} />)
};

export default Image