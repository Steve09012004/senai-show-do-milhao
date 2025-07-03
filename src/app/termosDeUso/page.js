import React from "react";
import "./page.css";

export default function TermosDeUso() {
  return (
    <div className="termos-container">
      <div className="termos-wrapper">
        {/* Header */}
        <div className="termos-header">
          <h1 className="termos-title">
            🎯 TERMOS DE USO
          </h1>
          <div className="termos-subtitle">
            Show do Milhão - Jogo de Perguntas e Respostas
          </div>
        </div>

        {/* Card principal */}
        <div className="termos-card">
          <div className="termos-intro">
            <div className="termos-intro-header">
              <div className="termos-icon-badge">
                <span>📋</span>
              </div>
              <h2 className="termos-intro-title">
                Importante: Leia antes de jogar!
              </h2>
            </div>
            
            <p className="termos-intro-text">
              Ao utilizar este aplicativo, você concorda com os seguintes termos:
            </p>
          </div>

          {/* Lista de termos */}
          <div className="termos-lista">
            <div className="termo-item">
              <div className="termo-icon">🔊</div>
              <p className="termo-text">
                O aplicativo pode reproduzir automaticamente áudios e outras mídias como parte da sua funcionalidade.
              </p>
            </div>

            <div className="termo-item">
              <div className="termo-icon">⚡</div>
              <p className="termo-text">
                A reprodução de áudio pode ocorrer sem aviso prévio, especialmente em momentos de interação com perguntas, respostas ou contadores de tempo.
              </p>
            </div>

            <div className="termo-item">
              <div className="termo-icon">✅</div>
              <p className="termo-text">
                Você deve aceitar esses termos para que os recursos multimídia funcionem corretamente.
              </p>
            </div>

            <div className="termo-item">
              <div className="termo-icon">🎮</div>
              <p className="termo-text">
                Ao continuar utilizando o aplicativo, você concede permissão para que ele utilize sons e mídias automaticamente.
              </p>
            </div>

            <div className="termo-item">
              <div className="termo-icon">👆</div>
              <p className="termo-text">
                É necessário haver ao menos uma interação (como clicar em um botão) para que o navegador permita a reprodução de áudio.
              </p>
            </div>
          </div>

          {/* Aviso final */}
          <div className="termos-aviso">
            <div className="termos-aviso-header">
              <span className="termos-aviso-icon">⚠️</span>
              <h3 className="termos-aviso-title">Aviso Importante</h3>
            </div>
            <p className="termos-aviso-text">
              Caso não aceite estes termos, o aplicativo pode não funcionar corretamente.
            </p>
          </div>
        </div>

        {/* Prêmio decorativo */}
        <div className="termos-footer">
          <div className="termos-trophy">
            <div className="trophy-icon">🏆</div>
          </div>
          <div className="termos-footer-text">
            Boa sorte no jogo!
          </div>
          <div className="termos-prize">
            Prêmio máximo: R$ 1.000.000,00
          </div>
        </div>
      </div>
    </div>
  );
}