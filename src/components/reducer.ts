import { State, Action, Item } from "./GlobalContext";

export const initialState: State = {
  items: [
    {
      id: "1",
      type: "CustomNode",
      position: { x: 0, y: 600 },
      data: {
        type: "Bet",
        emoji: "😎",
        title: "Launch push notifications",
        description:
          "Push notifications will entice users to come back to our app more frequently.",
        status: "Done",
      },
    },
    {
      id: "2",
      type: "CustomNode",
      position: { x: 900, y: 50 },
      data: {
        type: "Work",
        emoji: "🧰",
        title: "Launch push notifications",
        description:
          "Push notifications will entice users to come back to our app more frequently.",
        status: "Done",
      },
    },
    {
      id: "3",
      type: "CustomNode",
      position: { x: 900, y: 450 },
      data: {
        type: "Work",
        emoji: "🧰",
        title: "Launch push notifications",
        description:
          "Push notifications will entice users to come back to our app more frequently.",
        status: "Done",
      },
    },
    {
      id: "4",
      type: "CustomNode",
      position: { x: 900, y: 900 },
      data: {
        type: "Work",
        emoji: "🧰",
        title: "Launch push notifications",
        description:
          "Push notifications will entice users to come back to our app more frequently.",
        status: "Done",
      },
    },
    {
      id: "5",
      type: "CustomNode",
      position: { x: 1600, y: 600 },
      data: {
        type: "Metric / Input",
        emoji: "🌡️",
        title: "Launch push notifications",
        description:
          "Push notifications will entice users to come back to our app more frequently.",
        status: "Done",
      },
    },
  ],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "UPDATE_ITEMS":
      return {
        items: action.payload,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
