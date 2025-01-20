import {
	BarChart2,
	DollarSign,
	Menu,
	Settings,
	ShoppingBag,
	ShoppingCart,
	ChevronDown,
	TrendingUp,
	ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
	},
	{
		name: "Products",
		icon: ShoppingBag,
		color: "#8B5CF6",
		href: "/products",
		children: [
			{ name: "Add Product", href: "/add-product" },
			{ name: "All Product", href: "/all-product" },
		],
	},
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [expandedMenu, setExpandedMenu] = useState({});

	// Toggle submenu visibility
	const toggleSubmenu = (index) => {
		setExpandedMenu((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
				{/* Toggle Sidebar Button */}
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
				>
					<Menu size={24} />
				</motion.button>

				{/* Navigation Menu */}
				<nav className="mt-8 flex-grow">
					{SIDEBAR_ITEMS.map((item, index) => (
						<div key={item.href} className="mb-4">
							{/* Main Sidebar Item */}
							<motion.div
								className="flex items-center justify-between p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
								onClick={() =>
									item.children ? toggleSubmenu(index) : undefined
								}
							>
								<Link to={item.href} className="flex items-center">
									<item.icon
										size={20}
										style={{ color: item.color, minWidth: "20px" }}
									/>
									<AnimatePresence>
										{isSidebarOpen && (
											<motion.span
												className="ml-4 whitespace-nowrap"
												initial={{ opacity: 0, width: 0 }}
												animate={{ opacity: 1, width: "auto" }}
												exit={{ opacity: 0, width: 0 }}
												transition={{ duration: 0.2, delay: 0.3 }}
											>
												{item.name}
											</motion.span>
										)}
									</AnimatePresence>
								</Link>
								{/* Toggle Icon for Submenu */}
								{item.children && isSidebarOpen && (
									<motion.div>
										{expandedMenu[index] ? (
											<ChevronUp size={16} />
										) : (
											<ChevronDown size={16} />
										)}
									</motion.div>
								)}
							</motion.div>

							{/* Render Sub-items if present */}
							{item.children && expandedMenu[index] && isSidebarOpen && (
								<div className="ml-8 mt-2">
									{item.children.map((subItem) => (
										<Link key={subItem.href} to={subItem.href}>
											<motion.div
												className="flex flex-col gap-2 items-center p-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
												whileHover={{ scale: 1.05 }}
											>
												<motion.span>{subItem.name}</motion.span>
											</motion.div>
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</nav>
			</div>
		</motion.div>
	);
};

export default Sidebar;
