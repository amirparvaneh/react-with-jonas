import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <div>
      <fetcher.Form method="PATCH" className="text-right">
        <Button type="primary">Make priority</Button>
      </fetcher.Form>
    </div>
  );
};

export const action = async (request, params) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};

export default UpdateOrder;
