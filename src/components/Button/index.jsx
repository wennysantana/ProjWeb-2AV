import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
const index = ({texto, classExport, methodExport}) => {
  return (
    <div>
      <button className={classExport} onClick={methodExport}>{texto}</button>
    </div>
  );
};

export default index;

