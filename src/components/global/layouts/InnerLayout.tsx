import styled from "@emotion/styled";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 840px;
    height: 100%;
    min-height: 100vh;
    max-height: max-content;

    margin-top: 40px;
    padding: 0 20px;

    transition: all 0.3s ease-in-out;
`;

export default function InnerLayout({ ...props }) {
    return (
        <Layout {...props}>
            {props.children}
        </Layout>
    );
}
