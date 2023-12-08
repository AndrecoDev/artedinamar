import React from "react";

const MailTemplate = ({ data }) => {
  const renderPurchaseRequest = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Correo</th>
            <th>Nombres</th>
            <th>Dirrecion</th>
            <th>Telefono</th>
            <th>Apartamento (Opcional)</th>
            <th>Ciudad</th>
            <th>Elementos Carrito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.email}</td>
            <td>{data.name}</td>
            <td>{data.address}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.apartment}</td>
            <td>{data.city}</td>
            <td>
              {data.cartItems.map((e) => (
                <div
                  style={{
                    border: "1px solid lightblue",
                    borderRadius: "5px",
                    padding: "12px",
                  }}
                >
                  <p>
                    Categoria: {e.category}, Nombre: {e.name} Precio: {e.price}{" "}
                  </p>
                  <p>
                    Tag: {e.tags}, Cantidad: {e.quantity}
                  </p>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderEmailSuscription = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.mail}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div>
      {data?.isNewLetter ? renderEmailSuscription() : renderPurchaseRequest()}
    </div>
  );
};

export default MailTemplate;
