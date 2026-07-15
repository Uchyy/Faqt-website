import DashboardNavbar from "../components/layout/DashboardNavBar";
import DashboardHero from "../components/layout/DashboardHero";
import DashboardMenu from "../components/layout/DashBoardMenu";
import DashboardContent from "../components/layout/DashboardContent";
import { DashboardUIProvider } from "../context/DashboardUIContext";


function Dashboard(){

    return (
        <DashboardUIProvider>

            <DashboardMenu />

            <DashboardNavbar />


            <main className="w-full">

                <DashboardHero />


                <section className="
                    max-w-5xl
                    mx-auto
                    px-4
                    py-6
                ">
                    <DashboardContent />
                </section>


            </main>

        </DashboardUIProvider>
    );
}


export default Dashboard;