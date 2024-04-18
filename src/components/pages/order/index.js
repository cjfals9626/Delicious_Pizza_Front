import React, { useState, useRef } from "react";
import { Form, Button, Container, ProgressBar, Row, Col, Card, Modal  } from "react-bootstrap";

const Order = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    return (
        <div>
            <ProgressBar now={(step / steps.length) * 100} label={`Step ${step}`} />
        <h1>Order</h1>
        </div>
    );
};