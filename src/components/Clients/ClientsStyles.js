import styled from 'styled-components'


export const ClientSection = styled.section`
    
display: flex;
flex-direction: column;
gap:1rem;
margin-top: 1rem;

`

export const ClientTitle = styled.h2`
text-align: center;
font-size: clamp(1.3rem, 13vw, 3.1rem);
line-height: 1.06;
letter-spacing: 0.4rem;
/* margin-bottom: 100px; */
`

 export const ClientText = styled.p`
	/* margin: 1rem 0 auto; */
	text-align: center;
	font-size: 1.3rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const ClientRow = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 1100px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ClientColumn = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	margin: 0.4rem;

	@media screen and (max-width: 1100px) {
		div:not(:first-child) {
			display: none;
		}
	}
`;

export const ClientImage = styled.img`
	width: 90px;
	@media screen and (max-width: 1100px) {
		width: clamp(80px, 40vw, 400px);
		height: 60%;
	}
`;
export const ClientWrapper = styled.div`
	padding: 10px 40px;
	border-radius: 1rem;
	height: 110px;
	width: 100%;
	box-shadow: 0 0 32px 8px #dfdfdf;
	background-color: #fafeff;
	margin: 0.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;