import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Row = ({ data }: any) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell sx={{ width: "5%" }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell sx={{ width: "10%" }}>{data.name}</TableCell>
                <TableCell sx={{ width: "10%" }}>{data.symbol}</TableCell>
                <TableCell
                    sx={{ width: "10%" }}
                >{`$${data.current_price}`}</TableCell>
                <TableCell sx={{ width: "10%" }}>{data.market_cap}</TableCell>
                <TableCell sx={{ width: "10%" }}>
                    {data.price_change_percentage_24h}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>Test</Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};
