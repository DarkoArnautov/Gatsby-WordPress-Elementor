import React from "react"

const Text = (settings) => {
	console.log({ settings });
	return(
		 <div dangerouslySetInnerHTML={{ __html: settings }} />
		)
};

export default Text