import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import { Button } from "../ui/button";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckout = async () => {
    console.log("checking out");
  };

  return (
    <>
      <form action={onCheckout}>
        <Button>{event.isFree ? "Get Tickets" : "Buy Tickets"}</Button>
      </form>
    </>
  );
};

export default Checkout;
