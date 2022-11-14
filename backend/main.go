package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/vernandodev/go-jwt-react/backend/databases"
	"github.com/vernandodev/go-jwt-react/backend/routes"
)

func main() {
	databases.Connect()
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true, // frontend dapat mengakses cookie
	}))

	routes.Setup(app)

	app.Listen(":8000")
}
