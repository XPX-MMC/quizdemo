import React, { useState } from "react";

export const DateSet = () => {

   const [dateSet, dateSetState] = useState('')  
    
    
    return (
			<>
				<button
					onClick={() => {
						dateSetState(Date);
					}}
				>
					Push
				</button>
				<p>
					<span>{dateSet}</span>
				</p>
			</>
		);
}