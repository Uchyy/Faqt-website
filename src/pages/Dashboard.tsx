import DashboardNavbar from "../components/dashboard/DashboardNavBar";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardMenu from "../components/dashboard/DashBoardMenu";
import DashboardContent from "../components/dashboard/DashboardContent";
import { DashboardUIProvider, useDashboardUI } from "../context/DashboardUIContext";
import { NotificationProvider } from "../context/NotificationContext";


function Dashboard(){
    return (
        <NotificationProvider>
            <DashboardUIProvider>
                <DashboardLayout/>
            </DashboardUIProvider>
        </NotificationProvider>
    );
}

function DashboardLayout(){
    const { sidebarMode } = useDashboardUI();
    return (
        <div className="flex min-h-screen bg-accent/5 ">
            <DashboardMenu />
            <div className={`
                flex-1
                transition-all duration-300
                ${sidebarMode === "mobile" ? "w-full" : ""} `}>

                <DashboardNavbar />
                <main className="w-full px-6 justify-center">
                    <DashboardHero />
                    <section className="max-w-5xl px-6 py-6 ">
                        <DashboardContent />
                    </section>
                </main>
            </div>
        </div>
    );
}


export default Dashboard;