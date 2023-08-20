import React, { memo } from "react";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetail() {
  return (
    <>
      <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
        <Detail />
        <ExerciseVideos />
        <SimilarExercises />
      </Box>
    </>
  );
}
export default memo(ExerciseDetail);
