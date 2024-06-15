import LayoutDashboard from "../../LayoutDashboard/LayoutDashboard";
import MonitoringMain from "./MonitoringMain";
import CardMonitoring from "./CardMonitoring";

const MonitoringPage = () => {

    return(
        <LayoutDashboard>
            <MonitoringMain/>
            <div className="flex gap-2">
          <CardMonitoring />
        </div>
        </LayoutDashboard>
    )
}

export default MonitoringPage
