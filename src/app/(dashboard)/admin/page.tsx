import Fragment from "@/components/Fragment";
import RadialChart from "@/components/RadialChart";
import SimpleBarChart from "@/components/BarChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex flex-wrap gap-4 justify-between">
          <Fragment type="student" />
          <Fragment type="teacher" />
          <Fragment type="parent" />
          <Fragment type="staff" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-2/5 h-[450px] my-2">
            <RadialChart />
          </div>
          <div className="w-full lg:w-3/5 h-[450px] my-2">
            <SimpleBarChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
