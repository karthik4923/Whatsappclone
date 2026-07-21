import car1 from '../../assets/images/car1.jpg';
import car2 from '../../assets/images/car2.jpg';
import car3 from '../../assets/images/car3.jpg';
import car4 from '../../assets/images/car4.jpg';
import car5 from '../../assets/images/car5.jpg';
import car6 from '../../assets/images/car6.jpg';
import car7 from '../../assets/images/car7.jpg';
import car8 from '../../assets/images/car8.jpg';
import car9 from '../../assets/images/car9.jpg';
import car10 from '../../assets/images/car10.jpg';
import car11 from '../../assets/images/car11.jpg';
import car12 from '../../assets/images/car12.jpg';
import status1 from '../../assets/images/status1.mp4';
import status2 from '../../assets/images/status2.mp4';
import status3 from '../../assets/images/status3.mp4';
import status4 from '../../assets/images/status4.mp4';
import status5 from '../../assets/images/status5.mp4';
import status6 from '../../assets/images/status6.mp4';
import status7 from '../../assets/images/status7.mp4';
import channel1 from '../../assets/images/channel1.jpg';
import channel2 from '../../assets/images/channel2.jpg';
import channel3 from '../../assets/images/channel3.jpg';
import channel4 from '../../assets/images/channel4.jpg';
import channel5 from '../../assets/images/channel5.jpg';

const userdatas = [
  { phone: 9988776600, name: 'Karthik', status: '10:12', image: car4, type: 'solo',favo: false,story:true},
  { phone: 9988776611, name: 'Akhil', status: '12:55', image: car1, type: 'solo', favo: false },
  { phone: 9988776622, name: 'Jyotheswar', status: 'online', image: car2, type: 'solo', favo: false, story: true },
  { phone: 9988776633, name: 'Sravani', status: '09:45', image: car3, type: 'solo', favo: true, story: true },
  { phone: 9988776644, name: 'Ravi', status: '11:30', image: car5, type: 'solo', favo: false, story: true },
  { phone: 9988776655, name: 'Anjali', status: '08:15', image: car6, type: 'solo', favo: true, story: true },
  { phone: 9988776666, name: 'Vikram', status: '01:05', image: car7, type: 'solo', favo: false, story: true },
  { phone: 9988776677, name: 'Divya', status: '06:50', image: car8, type: 'solo', favo: true },
  { phone: 9988776688, name: 'Rahul', status: '03:20', image: car9, type: 'solo', favo: false },
  { phone: 9988776699, name: 'Meghana', status: '04:45', image: car10, type: 'solo', favo: false, story: true },
  { phone: 11, name: 'Friends Forever', status: '12/09/25', image: car11, type: 'group', favo: false },
  { phone: 12, name: 'B.Tech(IOT)', status: '12:00', image: car12, type: 'group', favo: false }

];
const today = new Date();
const day2 = new Date(today);
const day3 = new Date(today);
day2.setDate(today.getDate() - 2)
day3.setDate(today.getDate() - 3)
const formated = (date) => date.toISOString().split('T')[0];

const messages = [
  {
    phone: 9988776600,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hello enti cheppu' },
          { sender: 'me', text: 'Ella vunnavu' },
          { sender: 'them', text: 'Bhaguna nuvu!' },
          { sender: 'me', text: 'good' },
          { sender: 'them', text: 'Good!' }
        ]
      },
      {
        time: 'Yesterday',
        data: [
          { sender: 'me', text: 'Arey em chestunnav' },
          { sender: 'them', text: 'Just movie chustunna' },
          { sender: 'me', text: 'Bagundi?' },
          { sender: 'them', text: 'Super ra!' }
        ]
      },
      {
        time: 'Today',
        data: [
          { sender: 'me', text: 'Lunch ayyinda?' },
          { sender: 'them', text: 'Ayyindi ra' },
          { sender: 'me', text: 'Ok then' },
          { sender: 'them', text: 'Bye' }
        ]
      },
    ]
  },
  {
    phone: 9988776611,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
  {
    phone: 9988776622,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
 
  {
    phone: 9988776633,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
  {
    phone: 9988776644,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
  {
    phone: 9988776655,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
  {
    phone: 9988776666,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
  {
    phone: 9988776677,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
  {
    phone: 9988776688,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
  {
    phone: 9988776699,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi karthik' },
          { sender: 'them', text: 'Hey, ela unnav?' }
        ]
      },
      {
        time: 'yesterday',
        data: [
          { sender: 'me', text: 'Em news?' },
          { sender: 'them', text: 'Nothing special' }
        ]
      },
      {
        time: 'today',
        data: [
          { sender: 'me', text: 'Meeting ki vachava?' },
          { sender: 'them', text: 'Coming now' }
        ]
      }
    ]
  },
  {
    phone: 11,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hi everyone!' },
          { sender: 'them', text: 'Hey, welcome to the group!' }
        ]
      },
      {
        time: 'Yesterday',
        data: [
          { sender: 'them', text: 'Did anyone check the project update?' },
          { sender: 'me', text: 'Yes, looks good to me.' }
        ]
      },
      {
        time: 'Today',
        data: [
          { sender: 'me', text: 'Let’s meet tomorrow at 5pm.' },
          { sender: 'them', text: 'Sure, see you then.' }
        ]
      }
    ]
  },
  {
    phone: 12,
    times: [
      {
        time: formated(day2),
        data: [
          { sender: 'me', text: 'Hello team!' },
          { sender: 'them', text: 'Hi, ready for the seminar?' }
        ]
      },
      {
        time: 'Yesterday',
        data: [
          { sender: 'them', text: 'Presentation slides are ready.' },
          { sender: 'me', text: 'Great, please share.' }
        ]
      },
      {
        time: 'Today',
        data: [
          { sender: 'them', text: 'Practice session at 4pm.' },
          { sender: 'me', text: 'Noted, will join.' }
        ]
      }
    ]
  },

]
const stories = [
  { phone: 9988776600, story: status1 },
  { phone: 9988776622, story: status2 },
  { phone: 9988776633, story: status3 },
  { phone: 9988776644, story: status4 },
  { phone: 9988776655, story: status5 },
  { phone: 9988776666, story: status6 },
  { phone: 9988776699, story: status7 },
]
const channels = [
  { image: channel1, title: 'Daily Job Updates And Referals', data: 'Microsoft exam at 9pm..', status: '10:08' },
  { image: channel2, title: 'BTech Offcampus Updates', data: 'company: Uber Role:Software Engineering in..', status: '25/09/25' },
  { image: channel3, title: 'Geeks Kepler', data: 'New Coding Competition', status: 'Yesterday' },
  { image: channel4, title: 'Nakuri Safar', data: ' Hiring Freshers', status: 'Today' },
  { image: channel5, title: 'Hiring Updates', data:'Welcome to the Group', status: '12/09/2025' },
]
const calls = [
  { name: 'Divya', image: car8, status: '3:00', call: 'out', type: 2, lift: true },
  { name: 'Divya', image: car8, status: '2:50', call: 'out', type: 2, lift: false },
  { name: 'Akhil',image:car1, status: '12:00', call: 'in', type: 2 ,lift:true},
  { name: 'Joytheswar', image:car2,status: 'Today', call: 'in', type: 1,lift:false},
  { name: 'Akhil', image: car1, status: 'Yesterday', call: 'out', type: 2, lift: true },
  { name: 'Divya', image: car8, status: formated(day2), call: 'in', type: 1, lift: true },
  { name: 'Divya', image: car8, status: formated(day2), call: 'in', type: 1, lift: false },
  { name: 'Sravani', image: car3, status: formated(day3), call: 'in', type: 2, lift: true },
  { name: 'Sravani', image: car3, status: formated(day3), call: 'in', type: 2, lift: false },
]

export { userdatas, messages, stories, channels,calls }
