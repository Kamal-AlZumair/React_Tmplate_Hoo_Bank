import React from "react";

const Button = ({styles}) => {
	return (

		<button type="button" className={`py-6 px-4 bg-blue-gradient rounded-md font-medium text-[18px] outline-none text-primary ${styles}`}>Get Started </button>
	)
};

export default Button;
