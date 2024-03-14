import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Search from "./List";

function SearchButton() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = async () => {
    if (searchText.trim() === "") {
      // alert("Vui lòng nhập từ khóa tìm kiếm.");
      return;
    }

    try {
      const foodResponse = await fetch(
        "https://65f070efda8c6584131bc736.mockapi.io/FoodForEOSS"
      );
      const drinkResponse = await fetch(
        "https://65f070efda8c6584131bc736.mockapi.io/DrinkForEOSS"
      );
      const cerealResponse = await fetch(
        "https://65d55c1a3f1ab8c63436c8c1.mockapi.io/Cereal"
      );
      const cakeResponse = await fetch(
        "https://65f06999da8c6584131ba9bc.mockapi.io/Cakes"
      );
      const yogurtResponse = await fetch(
        "https://65f06999da8c6584131ba9bc.mockapi.io/Yogurt"
      );
      const smoothieResponse = await fetch(
        "https://65d55c1a3f1ab8c63436c8c1.mockapi.io/Smoothies"
      );

      if (
        !foodResponse.ok ||
        !drinkResponse.ok ||
        !cerealResponse.ok ||
        !cakeResponse.ok ||
        !yogurtResponse.ok ||
        !smoothieResponse.ok
      ) {
        throw new Error("Lỗi khi lấy dữ liệu từ API.");
      }

      const foodData = await foodResponse.json();
      const drinkData = await drinkResponse.json();
      const cerealData = await cerealResponse.json();
      const cakeData = await cakeResponse.json();
      const yogurtData = await yogurtResponse.json();
      const smoothieData = await smoothieResponse.json();

      const allData = [
        ...foodData,
        ...drinkData,
        ...cerealData,
        ...cakeData,
        ...yogurtData,
        ...smoothieData,
      ];

      const results = allData.filter((item) =>
        item.Name.toLowerCase().includes(searchText.toLowerCase())
      );

      setSearchResult(results);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div onClick={handleSearch}>
      <header>
        <Container className="container">
          <Row className="vh-70 d-flex justify-content-center align-items-center ">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card>
                <Card.Body className="custom-card-body">
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">
                      What do you want to search
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={handleSearch}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Your search</Form.Label>
                          <Form.Control
                            type="Text"
                            value={searchText}
                            placeholder="..."
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            autoFocus
                          />
                        </Form.Group>
                        <div className="d-grid">
                          <Button onClick={handleSearch}>Search</Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {searchResult && (
          <div>
            <h2>Kết quả:</h2>
            <ul>
              {searchResult.map((result, index) => (
                <div key={index}>
                  <Search
                    Image={result.Image}
                    Name={result.Name}
                    Price={result.Price}
                  />
                </div>
              ))}
            </ul>
          </div>
        )}
      </header>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default SearchButton;
