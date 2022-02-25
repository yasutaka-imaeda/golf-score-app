import React, { useEffect, useState } from "react";
import styles from "./InScoreOfOneHole.module.scss";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { TextField } from "@mui/material";

type Props = {
  hole: number;
};

const InScoreOfOneHole: React.FC<Props> = ({ hole }) => {
  const [count, setCount] = useState<number>(0);
  const [patCount, setPatCount] = useState<number>(0);
  const inScoreValue: any = document.getElementById(`inputScore${hole}`);
  const inPatScoreValue: any = document.getElementById(`inputPatScore${hole}`);
  useEffect(() => {
    if (inPatScoreValue) {
      inPatScoreValue.value = patCount;
    }
  }, [patCount, inPatScoreValue]);
  useEffect(() => {
    if (inScoreValue) {
      inScoreValue.value = count;
    }
  }, [count, inScoreValue]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.holeNumber}>{hole}ホール</div>
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
                onChange={(e: any) => setCount(e.target.value)}
              />
            </div>
            <div className={styles.buttonGroup}>
              <ButtonGroup>
                <Button
                  aria-label="reduce"
                  size="small"
                  onClick={() => {
                    setCount((num) => num - 1);
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  aria-label="increase"
                  size="small"
                  onClick={() => {
                    setCount((num) => ++num);
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
                onChange={(e: any) => setPatCount(e.target.value)}
              />
            </div>
            <div className={styles.patButtonGroup}>
              <ButtonGroup>
                <Button
                  aria-label="reduce"
                  className={styles.patButton}
                  size="small"
                  onClick={() => {
                    setPatCount((num) => num - 1);
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  aria-label="increase"
                  className={styles.patButton}
                  size="small"
                  onClick={() => {
                    setPatCount((num) => ++num);
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
