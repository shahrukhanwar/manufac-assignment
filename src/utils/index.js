export const transformData = (data) => {
  let scatterData = [];
  let alcoholTotalMalicAcidMap = {};
  let alcoholTotalCountMap = {};
  let avgMalicAcidData = [];
  data.forEach((d) => {
    scatterData.push([d['Color intensity'], d['Hue']]);

    // find total malic acid for each category
    if (!alcoholTotalMalicAcidMap[d['Alcohol']]) {
      alcoholTotalMalicAcidMap[d['Alcohol']] = d['Malic Acid'];
    } else {
      alcoholTotalMalicAcidMap[d['Alcohol']] += d['Malic Acid'];
    }

    // find total count for each category
    if (!alcoholTotalCountMap[d['Alcohol']]) {
      alcoholTotalCountMap[d['Alcohol']] = 1;
    } else {
      alcoholTotalCountMap[d['Alcohol']] += 1;
    }
  });

  // find avg malic acid for each category
  Object.keys(alcoholTotalMalicAcidMap).forEach((key) => {
    avgMalicAcidData.push(
      alcoholTotalMalicAcidMap[key] / alcoholTotalCountMap[key]
    );
  });

  return {
    scatterData,
    barData: {
      categories: Object.keys(alcoholTotalMalicAcidMap),
      data: avgMalicAcidData,
    },
  };
};
