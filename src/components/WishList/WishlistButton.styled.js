import styled from "styled-components";

export const WishlistButton = styled.button`
	color: ${(props) =>
		props.isInWishlist
			? "var(--Mak-colors-red-500)"
			: "var(--color-text)"}; ;
`;
