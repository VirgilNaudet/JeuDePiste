import React, { useState, useEffect } from "react";

const FrenchQuiz = () => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#451DC7";
    document.body.style.minHeight = "100vh";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showError, setShowError] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const questions = [
    {
      id: 1,
      answer: "1098",
      hint: "Si tu as la bonne réponse, va la donner à Alicia"
    },
    {
      id: 2,
      answer: "2352",
      hint: "Si tu as la bonne réponse, va la donner à Willy"
    },
    {
      id: 3,
      answer: "3451",
      hint: "Si tu as la bonne réponse, va la donner à Marion"
    },
    {
      id: 4,
      answer: "7531",
      hint: "Si tu as la bonne réponse, va la donner à Gaël"
    },
    {
      id: 5,
      answer: "9001",
      hint: "Si tu as la bonne réponse, va la donner à Jad"
    },
    {
      id: 6,
      answer: "8812",
      hint: "Si tu as la bonne réponse, va lui donner"
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      if (currentQuestion === questions.length - 1) {
        setCompleted(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer("");
        setShowError(false);
      }
    } else {
      setShowError(true);
    }
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    width: "80%",
    maxWidth: "400px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const bottomImageStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "180px",
    height: "45px",
    borderRadius: "10px",
  };

  if (!gameStarted) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <p style={{
          color: "white",
          marginBottom: "20px",
          fontSize: "14px",
        }}>
          Désactivez le dark mode de votre iPhone pour pouvoir jouer
        </p>
        <div style={cardStyle}>
          <div style={{
            marginBottom: "24px",
            textAlign: "center",
          }}>
            <p style={{
              fontWeight: "bold",
              marginBottom: "12px"
            }}>
              Les réponses ne peuvent être que des noms propres
            </p>
            <p style={{
              fontWeight: "bold",
              marginBottom: "24px"
            }}>
              Les réponses sont toutes présentes au 17ème étage ou l'ont été auparavant.
            </p>
          </div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Prêt à jouer :) ?
          </h2>
          <button
            onClick={() => setGameStarted(true)}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#3b82f6",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Oui !
          </button>
        </div>
        <img src="/logo.png" style={bottomImageStyle} alt="Logo" />
      </div>
    );
  }

  if (completed) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div style={cardStyle}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#16a34a",
              textAlign: "center",
            }}
          >
            Félicitations! Vous venez de terminer le jeu, rapprochez vous de
            Gaël et montrez lui ce message pour vos récompenses.
          </h2>
        </div>
        <img src="/logo.png" style={bottomImageStyle} alt="Logo" />
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={cardStyle}>
        <h3
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px", color: "#000000" }}
        >
          Question {currentQuestion + 1}
        </h3>

        <div
          style={{
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <img
            src={`/ENIGME${currentQuestion + 1}.png`}
            alt={`Question ${currentQuestion + 1}`}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "4px",
              marginBottom: "16px"
            }}
          />
          <p style={{
            marginTop: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#4b5563"
          }}>
            {questions[currentQuestion].hint}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            style={{
              width: "90%",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
            }}
            placeholder="Votre réponse..."
          />

          {showError && (
            <div
              style={{
                padding: "12px",
                backgroundColor: "#fef2f2",
                border: "1px solid #fee2e2",
                borderRadius: "8px",
                color: "#991b1b",
              }}
            >
              <div>Réponse incorrecte.</div>
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              backgroundColor: "#3b82f6",
              color: "white",
              cursor: "pointer",
              border: "none",
              fontSize: "16px",
            }}
          >
            Valider
          </button>
        </form>
      </div>
      <img src="/logo.png" style={bottomImageStyle} alt="Logo" />
    </div>
  );
};

export default FrenchQuiz;