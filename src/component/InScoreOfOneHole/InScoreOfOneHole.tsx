import React, { useEffect, useState } from "react";
import styles from "./InScoreOfOneHole.module.scss";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  registerScore,
  selectScore,
  addOneScore,
  rdOneScore,
  addOnePat,
  rdOnePat,
} from "../../app/scoreSlice";

type Props = {
  hole: number;
};

const InScoreOfOneHole: React.FC<Props> = ({ hole }) => {
  const dispatch = useAppDispatch();
  const [parNumber, setParNumber] = useState<number>(0);
  const inScoreValue: any = document.getElementById(`inputScore${hole}`);
  const inPatScoreValue: any = document.getElementById(`inputPatScore${hole}`);
  const inParNumberValue: any = document.getElementById(
    `inputparNumber${hole}`
  );

  useEffect(() => {
    if (inParNumberValue) {
      inParNumberValue.value = parNumber;
    }
  });

  const holeScore: any = useAppSelector(selectScore);
  window.setTimeout(() => {
    const inScoreValue: any =
      document.getElementById(`inputScore${hole}`) || {};
    const inPatScoreValue: any =
      document.getElementById(`inputPatScore${hole}`) || {};
    const inParNumberValue: any = document.getElementById(
      `inputparNumber${hole}`
    );
    inPatScoreValue.value = holeScore[hole - 1].pat;
    inScoreValue.value = holeScore[hole - 1].score;
  }, 10);

  useEffect(() => {
    if (inPatScoreValue) {
      inPatScoreValue.value = holeScore[hole - 1].pat;
    }
    if (inScoreValue) {
      inScoreValue.value = holeScore[hole - 1].score;
    }
  }, [inScoreValue, inPatScoreValue, dispatch, hole, holeScore]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.holeNumber}>{hole}ホール</div>
        <div className={styles.parNumber}>
          パー
          <input
            className={styles.parNumberInput}
            id={`inputParNumber${hole}`}
            onChange={(e: any) => setParNumber(e.target.value)}
          ></input>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.patWrapper}>
            <div className={styles.inputBox}>
              <TextField
                type="number"
                className={styles.inputScore}
                InputProps={{
                  inputProps: {
                    style: { textAlign: "center" },
                  },
                }}
                id={`inputScore${hole}`}
                onChange={(e: any) =>
                  dispatch(
                    registerScore({
                      holeNumber: hole,
                      score: Number(e.target.value),
                      pat: holeScore[hole - 1].pat,
                    })
                  )
                }
              />
            </div>
            <div className={styles.buttonGroup}>
              <ButtonGroup>
                <Button
                  aria-label="reduce"
                  size="small"
                  onClick={() => {
                    dispatch(rdOneScore(hole));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  aria-label="increase"
                  size="small"
                  onClick={() => {
                    dispatch(addOneScore(hole));
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={styles.patWrapper}>
            <div className={styles.inputPatBox}>
              <div className={styles.patTitile}>パット</div>
              <TextField
                type="number"
                className={styles.inputPat}
                size="small"
                InputProps={{
                  inputProps: {
                    style: { textAlign: "center" },
                  },
                }}
                id={`inputPatScore${hole}`}
                onChange={(e: any) =>
                  dispatch(
                    registerScore({
                      holeNumber: hole,
                      score: holeScore[hole - 1].score,
                      pat: Number(e.target.value),
                    })
                  )
                }
              />
            </div>
            <div className={styles.patButtonGroup}>
              <ButtonGroup>
                <Button
                  aria-label="reduce"
                  className={styles.patButton}
                  size="small"
                  onClick={() => {
                    dispatch(rdOnePat(hole));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  aria-label="increase"
                  className={styles.patButton}
                  size="small"
                  onClick={() => {
                    dispatch(addOnePat(hole));
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InScoreOfOneHole;
