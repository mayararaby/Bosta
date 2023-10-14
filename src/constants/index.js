import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import DoneIcon from '@mui/icons-material/Done';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

//Tracking service url
export const trackingServiceUrl ='https://tracking.bosta.co/shipments/track/'

//Mapping package status with readable keys 
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

//Mapping package status with css classes
export const StatusColors = {
  DELIVERED_TO_SENDER :"returnPackage",
  DELIVERED : "deliveredPackage",
  CANCELLED : "cancelledPackage"
}

// Mapping packages status with colors
export const StatusColorsCode = {
  OUT_FOR_DELIVERY :"#ffcc00",
  DELIVERED : "#339900",
  CANCELLED : "#e30613",
  DELIVERED_TO_SENDER:"#e30613",
  TICKET_CREATED :"#ffcc00",
}

export const rejectionInterfaces =['CANCELLED']

export const steps = [
  'TICKET_CREATED',
  'IN_TRANSIT',
  'OUT_FOR_DELIVERY',
  'DELIVERED'
]

// Stepper icons
export const stepsIcons = {
  '0':{
    1:<DoneIcon />,
    2:<RadioButtonCheckedIcon />,
    3:<LocalShippingIcon />,
    4:<LocalPostOfficeIcon/>
  },
  '1':{
    1:<DoneIcon />,
    2:<DoneIcon />,
    3:<LocalShippingIcon />,
    4:<LocalPostOfficeIcon/>
  },
  '2':  {
    1:<DoneIcon />,
    2:<DoneIcon />,
    3:<LocalShippingIcon />,
    4:<LocalPostOfficeIcon/>
  
  },'3':{
    1:<DoneIcon />,
    2:<DoneIcon />,
    3:<DoneIcon />,
    4:<DoneIcon />
  }
}

// Table details columns
export const  columns = [
  {
    id: 'branch',
    label: 'branch',
    align: 'right',
  },
  {
    id: 'date',
    label: 'date',
    align: 'right',
  },
  {
    id: 'time',
    label: 'time',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'details',
    label: 'details',
    align: 'right',
    verticalText: true,
  },
];