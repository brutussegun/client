import type {GetServerSideProps, NextPage} from "next";

import {MainNavigation} from "../components/Navigation";
import {getSession} from "next-auth/react";
import {Session} from "next-auth";

const Home: NextPage = () => {

    return (
        <div>
            <MainNavigation/>
        </div>
    );
};

export default Home;


export const getServerSideProps: GetServerSideProps<{
    session: Session | null
}> = async (context) => {
    return {
        props: {
            session: await getSession(context),
        },
    }
}
