import { v4 as uuid } from "uuid";
import {
	cpu,
	lapi,
} from "../../assets/images";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Laptop",
		img: lapi,
		description:
			"literature in the form of prose, especially novels, that describes imaginary events and people",
	},
	{
		_id: uuid(),
		categoryName: "Gaming Laptops",
		img: lapi,
		description:
			"Non-fiction is writing that gives information or describes real events, rather than telling a story.",
	},
	{
		_id: uuid(),
		categoryName: "CPU",
		img: cpu,
		description:
			"literature in the form of prose, especially novels, that describes imaginary events and people",
	},
	{
		_id: uuid(),
		categoryName: "Phones",
		img: cpu,
		description:
			"Non-fiction is writing that gives information or describes real events, rather than telling a story.",
	},
];
