import styled from "@emotion/styled";

const Layout = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 800px;
    height: 100%;
    min-height: 100vh;
    max-height: max-content;

    transition: all 0.3s ease-in-out;
`;

export default function InnerLayout({ ...props }) {
    return (
        <Layout {...props}>
            {props.children}
        </Layout>
    );
}
