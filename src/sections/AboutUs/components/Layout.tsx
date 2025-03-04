import { cva } from "class-variance-authority";
import { Fragment } from "react/jsx-runtime";
import { Separator } from "@/components/ui/separator";
import { Card } from "./Card";
import { metricsData } from "../metricsData";

const layoutStyles = cva(
  "flex flex-col xs:flex-row items-center justify-between flex-wrap bg-[#121212] gap-8 md:px-32 2xl:px-60"
);

export const Layout = () => (
  <div className={layoutStyles()}>
    {metricsData.map((metric, index) => (
      <Fragment key={index}>
        <Card
          value={metric.value}
          symbol={metric.symbol}
          label={metric.label}
        />
        {index !== metricsData.length - 1 && (
          <Separator className="w-[100px] sm:h-[64px] sm:w-[1px] bg-white" />
        )}
      </Fragment>
    ))}
  </div>
);
