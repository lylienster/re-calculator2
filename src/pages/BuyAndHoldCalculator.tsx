import React, { useState, Profiler } from "react";
import { Container, Tabs, Tab, Button, Row } from "react-bootstrap";
import { Guid } from "guid-typescript";
import PropertyInfo from "./Partials/PropertyInfo";
import PurchaseInfo from "./Partials/PurchaseInfo";
import RentalInfo from "./Partials/RentalInfo";
import { useLocalStorage } from "../helpers";
import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
// import Report from "./Partials/Report";
const Report = React.lazy(() => import("./Partials/Report"));

export interface Data {
  reportId: string;
  reportTitle: string;
  dateCreated: string;

  //propertyInfo
  address: string;
  city: string;
  state: string;
  zip: string;
  annualPropertyTaxes: number;
  mlsNumber: string;
  salesDescription: string;

  //features
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  propertyType: string;
  totalSqFootage: number;
  lotSize: number;
  yearBuilt: number;

  // purchaseInfo
  purchasePrice: number;
  afterRepairPrice: number;
  purchaseClosingCost: number;
  estimateRepairCost: number;
  preRentHoldingCost: number;

  //loanDetails
  downPaymentPercentage: number;
  loanInterestRate: number;
  loanPeriod: number;

  // rentalInfo:
  //income
  monthlyRent: number;
  otherMonthlyIncome: number;

  //fixedExpenses
  monthlyElectricyCost: number;
  monthlyWaterAndSewerCost: number;
  monthlyPmiCost: number;
  monthlyGarbageCost: number;
  monthlyHoaCost: number;
  monthlyInsurance: number;
  otherMonthlyExpenses: number;

  //variableExpenses
  vacancyRate: number;
  repairsAndMaintenanceRate: number;
  capitalExpendituresRate: number;
  propertyManagementRate: number;
  insuranceRate: number;
  taxRate: number;

  //futureAssumptions
  annualIncomeGrowth: number;
  annualPropertyValueGrowth: number;
  annualExpensesGrowth: number;
  salesExpenses: number;

  projectionYear: number;
}

interface KeyValuePair {
  key: string;
  value: string;
}
const BuyAndHoldCalculator = () => {
  // const [savedData, setSavedData] = useLocalStorage("userInput", {} as Data);
  const [reports, setReports] = useLocalStorage("reports", [] as Data[]);
  const [selectedReportId, setSelectedReportId] = useLocalStorage(
    "selectedReportId",
    ""
  );

  const selectedReportIndex = reports.findIndex(
    (x: Data) => x.reportId === selectedReportId
  );

  let selectedReport = {} as Data;

  if (selectedReportIndex !== -1) {
    selectedReport = reports[selectedReportIndex];
  } else {
    if (reports.length > 0) {
      selectedReport = reports[0];
      setSelectedReportId(selectedReport.reportId);
    }
  }

  const [data, setData] = useState(selectedReport || ({} as Data));

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newForm = {
      ...data,
      [event.target.name]:
        event.target.type === "text" ||
        event.target.type === "textarea" ||
        value === ""
          ? value
          : Number(value),
    };
    setData(newForm);
    // var t0 = performance.now();

    if (newForm.reportId) {
      const selectedReportIndex = reports.findIndex(
        (x: Data) => x.reportId === data.reportId
      );
      if (selectedReportIndex !== -1) {
        setReports([
          ...reports.slice(0, selectedReportIndex),
          newForm,
          ...reports.slice(selectedReportIndex + 1),
        ]);
      }
    }

    // var t1 = performance.now();

    // console.log("Saving to reports took " + (t1 - t0) + " milliseconds.");
  };

  // const handleOnRender = (
  //   id: string,
  //   phase: string,
  //   actualTime: number,
  //   baseTime: number,
  //   startTime: number,
  //   commitTime: number
  // ) => {
  //   console.log(id, phase, actualTime, baseTime, startTime, commitTime);
  // };

  let tabTitles = flow(
    // orderBy((x: Data) => x.dateCreated, ["desc"]),
    map((x: Data) => {
      return {
        value: x.reportTitle,
        key: x.reportId,
      } as KeyValuePair;
    })
  )(reports) as KeyValuePair[];

  if (!tabTitles || tabTitles.length === 0 || !data.reportId) {
    (tabTitles || []).push({ value: "New", key: "addReport" } as KeyValuePair);
  }

  const [key, setKey] = useState(selectedReport.reportId || "addReport");

  const handleOnSelect = (
    key: string,
    event: React.SyntheticEvent<unknown>
  ) => {
    if (key === data.reportTitle) {
      return;
    }

    if (key === "addReport") {
      event.preventDefault();
      setData({} as Data);
      setKey("addReport");
      return;
    }
    const previousIndex = reports.findIndex(
      (x: Data) => x.reportId === data.reportId
    );
    if (previousIndex !== -1) {
      setReports([
        ...reports.slice(0, previousIndex),
        data,
        ...reports.slice(previousIndex + 1),
      ]);
    }
    const index = reports.findIndex((x: Data) => x.reportId === key);
    const selectedReport = reports[index];
    setKey(key);
    setSelectedReportId(reports[index].reportId);
    setData({ ...selectedReport });
  };

  const handleCreateNewReportClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // let index = -1;
    // if (data.reportId) {
    //   index = reports.findIndex((x: Data) => x.reportId === data.reportId);
    // }

    // if (index !== -1) {
    //   setReports([
    //     ...reports.slice(0, index),
    //     data,
    //     ...reports.slice(index + 1),
    //   ]);
    //   return;
    // }

    data.reportId = Guid.create().toString();
    data.dateCreated = new Date().toISOString();
    setReports([...reports, data]);
    setKey(data.reportId);
    setSelectedReportId(data.reportId);
    setData(data);
  };

  const handleRemoveButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (reports.length === 1) {
      setReports([]);
      setSelectedReportId("");
      setKey("addReport");
      setData({} as Data);
    } else if (reports.length > 1) {
      let index = -1;
      if (data.reportId) {
        index = reports.findIndex((x: Data) => x.reportId === data.reportId);
      }

      if (index !== -1) {
        setReports([...reports.slice(0, index), ...reports.slice(index + 1)]);
      }

      var newData =
        reports.filter((x: Data) => x.reportId !== data.reportId)[0] || {};
      setSelectedReportId(newData.reportId);
      setKey(newData.reportId);
      setData(newData);
    }
  };

  return (
    // <Profiler id="Container" onRender={handleOnRender}>
    <Container>
      <h1 className="text-center">{`Buy & Hold Analysis`}</h1>
      <Tabs
        id="1"
        activeKey={key}
        onSelect={handleOnSelect}
        // className="justify-content-center py-3"
      >
        {tabTitles &&
          tabTitles.map((x: KeyValuePair, index: number) => {
            const title = x.value || `Report ${index + 1}`;
            return (
              <Tab eventKey={x.key} title={title}>
                {/* Test */}
              </Tab>
            );
          })}
        {data.reportId && (
          <Tab
            eventKey="addReport"
            title="Add New Report"
            disabled={!data.reportId}
          >
            Test
          </Tab>
        )}
      </Tabs>
      {!data.reportId && (
        <div className="float-right py-2">
          <Button onClick={handleCreateNewReportClick}>
            Create New Report
          </Button>
        </div>
      )}
      {data.reportId && (
        <div className="float-right py-2">
          <Button onClick={handleRemoveButtonClick} variant="danger">
            Remove Report
          </Button>
        </div>
      )}
      <div className="clearfix"></div>
      <PropertyInfo data={data} handleOnChange={handleOnChange} />
      <PurchaseInfo data={data} handleOnChange={handleOnChange} />
      <RentalInfo data={data} handleOnChange={handleOnChange} />
      <hr className="solid" />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Report data={data} />
      </React.Suspense>
      <div style={{ wordBreak: "break-word" }}>{JSON.stringify(data)}</div>
    </Container>
    // </Profiler>
  );
};

export default BuyAndHoldCalculator;
