// sample calendar events data

"use strict";

var curYear = moment().format("YYYY");
var curMonth = moment().format("MM");

// Calendar Event Source
var calendarEvents = {
  id: 1,
  backgroundColor: "rgba(1,104,250, .15)",
  borderColor: "#0168fa",
  events: [
    {
      id: "1",
      start: curYear + "-" + curMonth + "-08T08:30:00",
      end: curYear + "-" + curMonth + "-08T13:00:00",
      title: "DevGarden Meetup",
      description:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis..."
    },
    {
      id: "2",
      start: curYear + "-" + curMonth + "-10T09:00:00",
      end: curYear + "-" + curMonth + "-10T17:00:00",
      title: "Fedro's health program Review",
      description:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis..."
    },
    {
      id: "3",
      start: curYear + "-" + curMonth + "-13T12:00:00",
      end: curYear + "-" + curMonth + "-13T18:00:00",
      title: "Eu Pony horses Conference",
      description:
        "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi..."
    },
    {
      id: "4",
      start: curYear + "-" + curMonth + "-15T07:30:00",
      end: curYear + "-" + curMonth + "-15T15:30:00",
      title: "Weekly meetup",
      description:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis..."
    },
    {
      id: "5",
      start: curYear + "-" + curMonth + "-17T10:00:00",
      end: curYear + "-" + curMonth + "-19T15:00:00",
      title: "Monthly meetup",
      description:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis..."
    },
    {
      id: "6",
      start: curYear + "-" + curMonth + "-08T13:00:00",
      end: curYear + "-" + curMonth + "-08T18:30:00",
      title: "Fedro's birthday",
      description:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis..."
    }
  ]
};

// Birthday Events Source
var birthdayEvents = {
  id: 2,
  backgroundColor: "rgba(16,183,89, .25)",
  borderColor: "#10b759",
  events: [
    {
      id: "7",
      start: curYear + "-" + curMonth + "-01T18:00:00",
      end: curYear + "-" + curMonth + "-01T23:30:00",
      title: "Weekly meetup",
      description:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis..."
    },
    {
      id: "8",
      start: curYear + "-" + curMonth + "-21T15:00:00",
      end: curYear + "-" + curMonth + "-21T21:00:00",
      title: "Sweden Ponny horses meetup",
      description:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis..."
    },
    {
      id: "9",
      start: curYear + "-" + curMonth + "-23T15:00:00",
      end: curYear + "-" + curMonth + "-23T21:00:00",
      title: "Full training day",
      description:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis..."
    }
  ]
};

var holidayEvents = {
  id: 3,
  backgroundColor: "rgba(241,0,117,.25)",
  borderColor: "#f10075",
  events: [
    {
      id: "10",
      start: curYear + "-" + curMonth + "-04",
      end: curYear + "-" + curMonth + "-06",
      title: "Fedro training day"
    },
    {
      id: "11",
      start: curYear + "-" + curMonth + "-26",
      end: curYear + "-" + curMonth + "-27",
      title: "US competition week"
    },
    {
      id: "12",
      start: curYear + "-" + curMonth + "-28",
      end: curYear + "-" + curMonth + "-29",
      title: "Visit fedro's veterinary"
    }
  ]
};

var discoveredEvents = {
  id: 4,
  backgroundColor: "rgba(0,204,204,.25)",
  borderColor: "#00cccc",
  events: [
    {
      id: "13",
      start: curYear + "-" + curMonth + "-17T08:00:00",
      end: curYear + "-" + curMonth + "-18T11:00:00",
      title: "EU horse owners Workshop in Berlin"
    }
  ]
};

var meetupEvents = {
  id: 5,
  backgroundColor: "rgba(91,71,251,.2)",
  borderColor: "#5b47fb",
  events: [
    {
      id: "14",
      start: curYear + "-" + curMonth + "-03",
      end: curYear + "-" + curMonth + "-05",
      title: "EU Horse Meetup Conference"
    },
    {
      id: "15",
      start: curYear + "-" + curMonth + "-18",
      end: curYear + "-" + curMonth + "-20",
      title: "Horses Meetup in China"
    }
  ]
};

var otherEvents = {
  id: 6,
  backgroundColor: "rgba(253,126,20,.25)",
  borderColor: "#fd7e14",
  events: [
    {
      id: "16",
      start: curYear + "-" + curMonth + "-06",
      end: curYear + "-" + curMonth + "-08",
      title: "Fedro's Rest Day"
    },
    {
      id: "17",
      start: curYear + "-" + curMonth + "-29",
      end: curYear + "-" + curMonth + "-31",
      title: "My Rest Day"
    }
  ]
};
