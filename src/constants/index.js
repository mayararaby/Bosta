export const trackingServiceUrl ='https://tracking.bosta.co/shipments/track/'

export const packageStatus = {
  TICKET_CREATED:"ticketCreated",
  PACKAGE_RECEIVED :"packageReceived",
  IN_TRANSIT :"inTransit",
  OUT_FOR_DELIVERY :"outForDelivery",
  WAITING_FOR_CUSTOMER_ACTION : "waitingForCustomerAction",
  NOT_YET_SHIPPED :"notYetShipped",
  DELIVERED_TO_SENDER :"deliveredToSender",
  DELIVERED : "delivered",
  CANCELLED : "cancelled"
}

export const StatusColors = {
  DELIVERED_TO_SENDER :"returnPackage",
  DELIVERED : "deliveredPackage",
  CANCELLED : "cancelledPackage"
}