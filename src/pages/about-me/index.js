import React from "react";
import { Wrapper } from "./styles";
import { Helmet } from "react-helmet";
// import CardImg from "components/card-img";
// import CardText from "components/card-text";
import CardImgText from "components/card-img-text";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import * as html2canvas from "html2canvas";

function index() {
  // const downloadimage = () => {
  //   console.log("masuk downloadimage");
  //   //var container = document.getElementById("image-wrap"); //specific element on page
  //   var container = document.getElementById("htmltoimage"); // full page
  //   html2canvas(container, { allowTaint: true }).then(function (canvas) {
  //     var link = document.createElement("a");
  //     document.body.appendChild(link);
  //     link.download = "html_image.jpg";
  //     link.href = canvas.toDataURL();
  //     link.target = "_blank";
  //     link.click();
  //   });
  //   console.log("END downloadimage");
  // };

  // const handlePdf = () => {
  //   window.scrollTo(0, 0);
  //   const input = document.getElementById("page");

  //   console.log("inputnya page", input);
  //   html2canvas(input, {
  //     useCORS: true, // solve problems across the picture
  //     // taintTest: false,
  //     allowTaint: true,
  //     // height: 842,
  //   }).then(canvas => {
  //     var contentWidth = canvas.width;
  //     var contentHeight = canvas.height;

  //     // display a pdf html page generated canvas height;
  //     var pageHeight = (contentWidth / 592.28) * 841.89;
  //     // not generated pdf html page height
  //     var leftHeight = contentHeight;
  //     // page offsets
  //     var position = 0;
  //     // size paper a4 [595.28,841.89], html page canvas is generated in the image width and height of the pdf
  //     var imgWidth = 595.28;
  //     var imgHeight = (592.28 / contentWidth) * contentHeight;

  //     var pageData = canvas.toDataURL("image/png", 1.0);
  //     var pdf = new jsPDF("", "pt", "a4");

  //     // we need to distinguish between two highly, highly practical one html page, the page height and generate the pdf (841.89)
  //     // When the content of the display range does not exceed a pdf without pagination
  //     if (leftHeight < pageHeight) {
  //       console.log("masuk if", leftHeight, pageHeight);
  //       pdf.addImage(pageData, "PNG", 0, 0, imgWidth, imgHeight);
  //     } else {
  //       console.log("masuk else", leftHeight, pageHeight);
  //       while (leftHeight > 0) {
  //         pdf.addImage(pageData, "PNG", 0, position, imgWidth, imgHeight);
  //         leftHeight -= pageHeight;
  //         position -= 841.89;
  //         // Avoid adding blank pages
  //         if (leftHeight > 0) {
  //           pdf.addPage();
  //         }
  //       }
  //     }
  //     pdf.save("check .pdf");
  //   });
  // };

  // const hrStyle = {
  //   border: "5px solid rgb(23, 162, 184)",
  // };

  // const subtotal = [0, 100];
  // const add = (a, b) => a + b;
  // const sum = subtotal.reduce(add);

  // const tax = sum * 0.1;
  // const total = sum + tax;

  return (
    <Wrapper className="wrapper-body-content">
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Sukma Rangga Pradita Wijaya CV" />
      </Helmet>

      {/* <div
        className="col-12 col-lg-6"
        id="page"
        style={{
          border: "solid 1px red",
          height: "841px",
          width: "592px",
          // marginLeft: "auto",
          // marginRight: "auto",
        }}
      >
        <div className="container-fluid bg-info text-white">
          <div className="row">
            <div className="col text-left m-2">
              <p>Your Company Name</p>
              <h2>Invoice</h2>
            </div>
            <div className="col text-right">
              <p>22 Yusen St</p>
              <br />
              <p>borburn</p>
              <br />
              <p>WSN</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <h5>Billed To</h5>
              <p>{"this.props.inputs.company"}</p>
              <p>{"this.props.inputs.address"}</p>
              <p>{"this.props.inputs.zip"}</p>
            </div>
            <div className="col-4">
              <div>
                <h5>Invoive number</h5>
                <p>Za{Math.floor(Math.random() * 100 + 1)}</p>
              </div>
              <div>
                <h5>Date</h5>
                <p>{"this.props.inputs.date"}</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <h5>Invoice Totals</h5>
                <p>${total}</p>
              </div>
            </div>
          </div>
        </div>
        <hr style={hrStyle} />
        <div className="Invoices">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
        <hr />
        <div className="col-12 text-right">
          <h5 className="m-2">
            Subtotal<span className="m-2">${sum}</span>
          </h5>
          <p>
            Tax(10%)<span className="m-2">${tax.toFixed(2)}</span>
          </p>
          <h2>
            Total<span className="m-2">${total}</span>
          </h2>
        </div>
      </div> */}

      {/* <button
        onClick={() => handlePdf()}
        className="btn btn-primary btn-lg mx-auto"
      >
        Generate PDF
      </button> */}

      <CardImgText
        title="</ Mencari Front End Developer Profesional? Anda Berada di Tempat yang Tepat."
        // button
        description={`
          Halo, nama saya Sukma Rangga Pradita Wijaya. 
          Saya seorang front-end developer dengan pengalaman lebih dari 3 tahun dalam mengembangkan antarmuka pengguna yang menarik dan responsif untuk aplikasi web. 
          Saya memiliki pengetahuan yang mendalam tentang HTML, CSS, JavaScript, React Js, Next Js. 
          Saya juga berpengalaman dalam mengoptimalkan kinerja aplikasi web dan menerapkan praktik terbaik dalam hal aksesibilitas web. 
`}
        description2={`
          Saya senang bekerja dalam tim yang kolaboratif dan siap untuk menghadapi tantangan dalam mengembangkan solusi kreatif untuk memenuhi kebutuhan pengguna dan mencapai tujuan bisnis. 
          Dengan pengalaman dan keahlian saya sebagai front-end developer, saya siap untuk berkontribusi dalam pengembangan aplikasi web yang menarik, responsif, dan berkinerja tinggi.`}
      ></CardImgText>
    </Wrapper>
  );
}

export default index;
