package core

import (
	"github.com/nanoteck137/animdb/config"
	"github.com/nanoteck137/animdb/database"
	"github.com/nanoteck137/animdb/types"
)

// Inspiration from Pocketbase: https://github.com/pocketbase/pocketbase
// File: https://github.com/pocketbase/pocketbase/blob/master/core/app.go
type App interface {
	DB() *database.Database
	Config() *config.Config

	WorkDir() types.WorkDir

	Bootstrap() error
}
