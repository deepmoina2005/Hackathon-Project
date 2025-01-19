import React, { useState, useEffect } from "react";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import OrdersTable from "../components/orders/OrdersTable";
import ProductsTable from "../components/products/ProductsTable";

const OverviewPage = () => {
	// State for stats and loading
	const [stats, setStats] = useState({
		totalSales: 0,
		totalProducts: 0,
		newUsers: 0,
		conversionRate: 0,
	});
	const [isLoading, setIsLoading] = useState(true);

	// Simulate data fetching
	useEffect(() => {
		const fetchData = () => {
			// Mock data
			const mockData = {
				totalSales: 12345,
				totalProducts: 567,
				newUsers: 234,
				conversionRate: 10.5,
			};

			setTimeout(() => {
				setStats(mockData);
				setIsLoading(false);
			}, 1500); // Simulate a 1.5-second delay
		};

		fetchData();
	}, []);

	return (
		<div className="flex-1 overflow-auto relative z-10">
			<Header title="Overview" />

			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				{/* STATS */}
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{isLoading ? (
						<div className="col-span-2 text-center text-gray-500">Loading stats...</div>
					) : (
						<>
							<StatCard
								name="Total Sales"
								icon={Zap}
								value={`$${stats.totalSales.toLocaleString()}`}
								color="#6366F1"
							/>
							<StatCard
								name="Total Products"
								icon={ShoppingBag}
								value={stats.totalProducts.toLocaleString()}
								color="#EC4899"
							/>
						</>
					)}
				</motion.div>

				{/* CHARTS */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{isLoading ? (
						<div className="col-span-2 text-center text-gray-500">Loading charts...</div>
					) : (
						<>
							<SalesOverviewChart />
							<CategoryDistributionChart />
							<OrdersTable />
							<ProductsTable />
						</>
					)}
				</div>
			</main>
		</div>
	);
};

export default OverviewPage;
