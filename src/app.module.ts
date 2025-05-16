import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OverlayModule } from './overlays/overlays.module';
import { MatchModule } from './matches/matches.module';
import { TeamsModule } from './teams/teams.module';
import { SportsModule } from './sports/sports.module';
import { DatabaseModule } from './database/database.module';
import { PlayersModule } from './players/players.module';
import { UsersModule } from './users/users.module';
import { MediaModule } from './media/media.module';
import { SettingsModule } from './settings/settings.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { StreamsModule } from './streams/streams.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [OverlayModule, MatchModule, TeamsModule, SportsModule, DatabaseModule, PlayersModule, UsersModule, MediaModule, SettingsModule, AnalyticsModule, StreamsModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
