const { default: CardDetails } = require("@/app/components/CardDetails");

const AppDetails = async ({ params }) => {
  const { appId } = await params;
  return <CardDetails appId={appId} />;
};
export default AppDetails;
