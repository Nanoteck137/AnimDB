package cmd

import (
	"github.com/nanoteck137/animdb"
	"github.com/nanoteck137/animdb/config"
	"github.com/nanoteck137/animdb/core/log"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:     animdb.AppName,
	Version: animdb.Version,
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		log.Fatal("Failed to run root command", "err", err)
	}
}

func init() {
	rootCmd.SetVersionTemplate(animdb.VersionTemplate(animdb.AppName))

	cobra.OnInitialize(config.InitConfig)

	rootCmd.PersistentFlags().StringVarP(&config.ConfigFile, "config", "c", "", "Config File")
}
