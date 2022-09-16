import type {GetServerSideProps, NextPage} from "next";

import {MainNavigation} from "../components/Navigation";
import {getSession, useSession} from "next-auth/react";
import {Session} from "next-auth";
import {Spinner} from "../components/Spinner";

const Home: NextPage = () => {

    const {data: session, status} = useSession();
    if (status === 'loading') return <Spinner/>
    if (!session) return (
        <div>
            <MainNavigation/>
            TESTING WITHOUT SESSION1
        </div>
    );

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
